import { FcSearch, FcCheckmark } from "react-icons/fc";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Form } from "react-bootstrap";

const DropDownMenu = () => {
    return (
        <DropdownButton id="dropdown-basic" title="Sort by">
            <Dropdown.Item href="#/action-1">Product Name<FcCheckmark /></Dropdown.Item>
            <Dropdown.Item href="#/action-2">Barcode<FcCheckmark /></Dropdown.Item>
            <Dropdown.Item href="#/action-3">Category<FcCheckmark /></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-4">Asc<FcCheckmark /></Dropdown.Item>
            <Dropdown.Item href="#/action-5">Desc<FcCheckmark align="end" /></Dropdown.Item>
        </DropdownButton>
    )
}

const Search = ({ query, onQueryChange }) => {
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="search-label"><FcSearch /></span>
            <Form.Control type="text"
                className="form-control"
                name="query"
                id="query"
                value={query}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-label"
                onChange={(event) => { onQueryChange(event.target.value) }} />
            <DropDownMenu />
        </div>
    )
}

export default Search;