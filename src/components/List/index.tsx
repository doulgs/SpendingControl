import { FlashList } from "@shopify/flash-list";
import React from "react";

type Props<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactElement;
};

const List = <T,>({ data, renderItem }: Props<T>) => {
  return (
    <FlashList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => renderItem(item)}
      estimatedItemSize={55}
    />
  );
};

export { List };
