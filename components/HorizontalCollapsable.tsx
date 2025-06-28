import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const HorizontalCollapsible = () => {
  return (
    <div className="flex"> {/* Use flexbox to arrange elements horizontally */}
      <Collapsible className='flex'>
        <CollapsibleTrigger>Expand</CollapsibleTrigger>
        <CollapsibleContent>
          <div className="content">Content for Section 1</div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default HorizontalCollapsible;