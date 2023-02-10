import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './styles.css';

export const RadixSelect = () => (
  <Select.Root>
    <Select.Trigger className="SelectTrigger" aria-label="Sort By">
      <Select.Value placeholder="Sort By: Most Recent" />
      <Select.Icon className="SelectIcon">down</Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className="SelectContent">
        <Select.ScrollUpButton className="SelectScrollButton">up</Select.ScrollUpButton>
        <Select.Viewport className="SelectViewport">
          <Select.Item value="Highest Rated" className="SelectItem">
            <Select.ItemText>Highest Rated</Select.ItemText>
            <Select.ItemIndicator className="SelectItemIndicator">
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="Newest" className="SelectItem">
            <Select.ItemText>Newest</Select.ItemText>
            <Select.ItemIndicator className="SelectItemIndicator">
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="Oldest" className="SelectItem">
            <Select.ItemText>Oldest</Select.ItemText>
            <Select.ItemIndicator className="SelectItemIndicator">
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>
        </Select.Viewport>
        <Select.ScrollDownButton />
        <Select.Arrow />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
