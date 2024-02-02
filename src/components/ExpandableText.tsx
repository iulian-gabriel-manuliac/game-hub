import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
  limit?: number;
}

const ExpandableText = ({ text = "", limit = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const useExpansion = text.length >= limit;

  const formatGameDescription = () => {
    if (!useExpansion) {
      return text;
    }

    return !expanded ? text.substring(0, limit) + "..." : text;
  };

  return (
    <>
      <Text>{formatGameDescription()}</Text>
      {useExpansion && (
        <Button
          onClick={() => setExpanded(!expanded)}
          colorScheme="yellow"
          size="sm"
          fontWeight="bold"
          marginY={3}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      )}
    </>
  );
};

export default ExpandableText;
