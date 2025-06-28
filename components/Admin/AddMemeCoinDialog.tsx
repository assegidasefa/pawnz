import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { CirclePlus, Palette, Plus } from "lucide-react";

interface AddMemecoinDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddMemecoinDialog({
  open,
  onOpenChange,
}: AddMemecoinDialogProps) {
  const [form, setForm] = React.useState({
    name: "",
    symbol: "",
    address: "",
    chain: "",
    logo: null as File | null,
  });

  // Color palette state
  const [palette, setPalette] = React.useState<string[]>([
    "#C6FF43",
    "#F06B6B",
    "#3B82F6",
  ]);

  // Error handling per field (for demo, not full validation)
  const [errors, setErrors] = React.useState<{
    name?: boolean;
    symbol?: boolean;
    address?: boolean;
    logo?: boolean;
    chain?: boolean;
  }>({});

  function handleInput(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
  }

  function handleChain(value: string) {
    setForm((prev) => ({ ...prev, chain: value }));
  }

  function handleLogo(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setForm((prev) => ({ ...prev, logo: e.target.files![0] }));
      setErrors((prev) => ({ ...prev, logo: false }));
    }
  }

  function handlePaletteChange(idx: number, value: string) {
    const newPalette = [...palette];
    newPalette[idx] = value;
    setPalette(newPalette);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.symbol.trim()) newErrors.symbol = true;
    if (!form.address.trim()) newErrors.address = true;
    if (!form.logo) newErrors.logo = true;
    if (!form.chain) newErrors.chain = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    // TODO: Submit logic here
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="lg:!max-w-3xl w-full p-6 rounded-xl [&>button]:hidden bg-primary overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[16px] lg:text-[20px] font-normal font-sans mb-2">
            Add new Memecoin
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-1 lg:space-y-3">
          <div className="flex gap-3 lg:flex-row flex-col">
            <div className="w-full lg:w-1/2">
              <Input
                name="name"
                placeholder="eg. Ponke"
                value={form.name}
                onChange={handleInput}
                className={`w-full bg-card ${errors.name ? "border-destructive" : "border-border"}`}
                aria-label="Token Name"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <Input
                name="symbol"
                placeholder="eg. PONKE"
                value={form.symbol}
                onChange={handleInput}
                className={`w-full bg-card ${errors.symbol ? "border-destructive" : "border-border"}`}
                aria-label="Token Symbol"
              />
            </div>
          </div>
          <div className="flex gap-3 lg:flex-row flex-col">
            <div className="w-full lg:w-1/2">
              <Input
                name="address"
                placeholder="0x..."
                value={form.address}
                onChange={handleInput}
                className={`w-full bg-card ${errors.address ? "border-destructive" : "border-border"}`}
                aria-label="Contract Address"
              />
            </div>
            <Select value={form.chain} onValueChange={handleChain}>
              <SelectTrigger
                className={`w-full bg-card lg:w-1/2  ${
                  errors.chain ? "border-destructive" : ""
                }`}
                aria-label="Select Chain"
              >
                <span className="flex items-center gap-2">
                  <img
                    src="/pawnzLogo.svg"
                    alt="Ethereum"
                    className="w-5 h-5"
                  />
                  Ethereum
                </span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ethereum">Ethereum</SelectItem>
                <SelectItem value="solana">Solana</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-500" htmlFor="logo-upload">
              Logo
            </label>
            <label
              htmlFor="logo-upload"
              className={`flex bg-card hover:bg-card/70 flex-col items-center justify-center w-full h-[80px] lg:h-[123px] border rounded-md p-4 text-center cursor-pointer transition-colors
      ${
        errors.logo
          ? "border-destructive bg-destructive"
          : "border-card bg-muted hover:bg-accent"
      }
    `}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  document.getElementById("logo-upload")?.click();
                }
              }}
            >
              <h1 className="text-[14px] font-medium  mb-2">
                Drag &amp; drop or click to upload
              </h1>
              <span className="text-[14px] ">PNG, JPG (max 1MB)</span>
              <input
                id="logo-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleLogo}
                className="hidden"
                aria-describedby="logo-help"
              />
            </label>
          </div>

          {/* Color Palette */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Color Palette
            </label>
            <div className="flex items-center lg:flex-row flex-col gap-1 lg:gap-3">
              {palette.map((color, idx) => (
                <div
                  key={idx}
                  className="flex items-center  h-8 gap-1 bg-card rounded px-2 py-1 border "
                >
                  <span
                    className="inline-block w-4 h-4 rounded"
                    style={{ backgroundColor: color }}
                  />
                  <input
                    type="text"
                    value={color}
                    maxLength={7}
                    onChange={(e) => handlePaletteChange(idx, e.target.value)}
                    className="w-20 text-xs border-none focus:ring-0 bg-transparent"
                  />
                </div>
              ))}
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 rounded border "
                onClick={() => setPalette([...palette, "#D5FF40"])}
                title="Add color"
              >
                <CirclePlus className="w-4 h-4 text-[#D5FF40]" />
              </button>
            </div>
          </div>

          {errors.logo && (
            <p className="text-destructive text-xs mt-1 uppercase font-mono text-[12px]">
              Please Address the following errors: some required fields are
              missing content .
            </p>
          )}
          <DialogFooter 
        //   className="flex flex-col gap-2 pt-4 w-full lg:flex-row   p-0"
          >
            <div className="flex flex-col gap-2 pt-4 w-full lg:flex-row   p-0">
            <Button
              className="w-full lg:w-1/2 bg-card"
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#D5FF40] hover:bg-[#D5FF40]/70 text-black font-semibold w-full lg:w-1/2"
            >
              Add
            </Button>

            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
