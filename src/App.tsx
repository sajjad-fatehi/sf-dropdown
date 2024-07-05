import { Dropdown, DropdownItem } from "@components/dropdown";
import { FlexContainer } from "@components/flex-container";
import { dropdownItemsMock } from "mock";
import React, { useState } from "react";

const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
  placeholder: "Select or write 🧃",
};

function App() {
  const [items, setItems] = useState<DropdownItem[]>(dropdownItemsMock);

  const handleOnSelect = (item: DropdownItem) => {
    setItems((prev) => {
      const index = prev.findIndex((q) => q.value === item.value);
      if (index > -1) {
        prev[index].selected = !prev[index].selected;
      }
      return [...prev];
    });
  };

  const handleOnNewItem = (text: string) => {
    setItems((prev) => {
      prev.unshift({
        label: text,
        value: + new Date(),
        selected: true,
      });
      return [...prev];
    });
  };

  return (
    <>
      <FlexContainer vertical>
        <Dropdown
          input={inputProps}
          items={items}
          onSelect={handleOnSelect}
          onNewItem={handleOnNewItem}
        />
      </FlexContainer>
    </>
  );
}

export default App;
