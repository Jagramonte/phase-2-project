import { Form, Input } from "semantic-ui-react";
function SearchBar({ setSearchTerm }) {
  return (
    <Form >
      <Input
        type="text"
        name="search"
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
    </Form>
  );
}
export default SearchBar;
