import { Button, Text } from "@chakra-ui/react";
import React, { FC, useState, useEffect } from "react";

interface ReadMoreProps {
  text: string;
}

const ReadMore: FC<ReadMoreProps> = ({ text }) => {
  const [haveToBeTruncated, setHaveToBeTruncated] = useState(false);

  useEffect(() => {
    if (text.length > 135) {
      setHaveToBeTruncated(true);
    }
  }, [text]);

  return (
    <Text>
      {haveToBeTruncated ? text.slice(0, 134) : text}

      {haveToBeTruncated && (
        <Button
          size="sm"
          onClick={() => setHaveToBeTruncated(!haveToBeTruncated)}
          variant="link">
          {haveToBeTruncated ? "... See more" : "See less"}
        </Button>
      )}
    </Text>
  );
};

export default ReadMore;
