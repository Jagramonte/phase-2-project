import { Form, Input } from "semantic-ui-react";
function SearchBar({ setSearchTerm }) {
  return (
    <Form className="header__right">
      <Input
        type="text"
        name="search"
        onChange={(e) => setSearchTerm(e.currentTarget.value)} 
        placeholder="Search"
      />
    </Form>
  );
}
export default SearchBar;
