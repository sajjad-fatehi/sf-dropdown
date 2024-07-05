import { UID } from "@interfaces/UID";
import { useCallback, useEffect, useRef } from "react";
import { RiArrowDropDownLine, RiCheckLine } from "react-icons/ri";

export type DropdownItem = {
  label: string;
  value: UID;
  selected?: boolean;
};
export type DropdownValues = DropdownItem["value"][];
export type DropdownProps = {
  input?: React.InputHTMLAttributes<HTMLInputElement>;
  items: DropdownItem[];
  onSelect?: (item: DropdownItem) => void;
  onNewItem?: (text: string) => void;
};

const defaultProps: DropdownProps = {
  items: [],
  onSelect: () => {},
  onNewItem: () => {},
};

export const Dropdown = ({
  input,
  items,
  onSelect,
  onNewItem,
}: DropdownProps = defaultProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => inputRef.current?.focus();

  useEffect(() => {
    focusInput();
  }, []);

  const handleInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && inputRef.current) {
        const text = inputRef.current.value;
        text && onNewItem?.(text);
        inputRef.current.value = "";
      }
    },
    [onNewItem]
  );

  return (
    <div className="dropdown">
      <div className="input-container">
        <input
          {...input}
          ref={inputRef}
          type="text"
          onKeyDown={handleInputKeyDown}
        />
        <RiArrowDropDownLine onClick={focusInput} />
      </div>
      <div className="item-container">
        <ul>
          {items.map((item) => (
            <li
              className={`${item.selected ? "selected" : ""}`}
              key={item.value}
            >
              <button onClick={() => onSelect?.(item)}>{item.label}</button>
              <RiCheckLine />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
