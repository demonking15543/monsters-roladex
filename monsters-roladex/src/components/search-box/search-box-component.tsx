import {ChangeEvent} from "react";

import './search-box.style.css';

// interface ISearchProps  extends IChangeHandlerProps{
//   placeholder ?: string;

// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a:string) => void;

// }

type SearchBoxType = {
  placeholder ?: string
  onChangeHandler: (event:ChangeEvent<HTMLInputElement>) => void
}
export const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxType) => (
        <input className="search"  type="search"  placeholder={placeholder}
      onChange={onChangeHandler} />
)

