import { UnorderedList, ListItem } from "@chakra-ui/react";

const ListRenderer = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <UnorderedList spacing={2}>
      {items.map((item, i) => (
        <ListItem ml='-24px' key={i}>{item}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default ListRenderer;
