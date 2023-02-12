import React, { useEffect } from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './styles.css';

type SelectProps = {
  config: {
    items: {
      value: string;
      text: string;
    }[];
    callback: (value: string) => void;
    placeholder: string;
  };
};

export const RadixSelect = ({ config }: SelectProps) => {
  const [value, setValue] = React.useState(config.placeholder);

  console.log('val change ', value);

  useEffect(() => {
    config.callback(value);
  }, [value]);

  return (
    <Select.Root value={value} onValueChange={setValue}>
      <Select.Trigger className="SelectTrigger" aria-label="Sort By">
        <Select.Value aria-label={value}>{value}</Select.Value>
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            {config.items.map((item) => (
              <Select.Item value={item.value} className="SelectItem" key={item.value}>
                <Select.ItemText>{item.text}</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
