import { HStack, IconButton, Tooltip } from "@chakra-ui/react";
import { MouseEvent, Dispatch, SetStateAction } from "react";
import { BsCardList, BsListTask } from "react-icons/bs";
import { IconType } from "react-icons/lib";

export enum IDashboardSize {
  Small = "size",
  Detailed = "detailed",
  List = "list",
}

interface IDashboardDetails {
  label: string;
  Icon: IconType;
}

const DashboardSizeDetails: Record<IDashboardSize, IDashboardDetails> = {
  [IDashboardSize.Small]: { label: "Card View", Icon: BsCardList },
  [IDashboardSize.Detailed]: { label: "Detailed Card View", Icon: BsCardList },
  [IDashboardSize.List]: { label: "List View", Icon: BsListTask },
};

interface ISizeSelector {
  selectedSize?: IDashboardSize;
  setSelectedSize: Dispatch<SetStateAction<IDashboardSize>>;
}

export const SizeSelector = ({
  selectedSize,
  setSelectedSize,
}: ISizeSelector) => {
  const handleSelect = (size: IDashboardSize) => {
    setSelectedSize(size);
  };

  return (
    <HStack>
      {Object.values(IDashboardSize).map((size) => {
        const { Icon, label } = DashboardSizeDetails[size];
        return (
          <Tooltip label={label} rounded="md" border="1px solid">
            <IconButton
              size="lg"
              aria-label={label}
              icon={<Icon />}
              onClick={() => handleSelect(size)}
              colorScheme={selectedSize === size ? "teal": "gray"}
            />
          </Tooltip>
        );
      })}
    </HStack>
  );
};
