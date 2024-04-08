'use client';

import { Select, useColorModeValue } from '@chakra-ui/react';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

import { IDashboardTag, TagColor } from '../constants';

interface ITagSelector {
  selectedTag?: IDashboardTag;
  setSelectedTag: Dispatch<SetStateAction<IDashboardTag | undefined>>;
}

export const TagSelector = ({ selectedTag, setSelectedTag }: ITagSelector) => {
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(e.target.value as IDashboardTag);
  };

  const deselectedBgColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Select
      w="250px"
      placeholder="All Dashboards"
      size="lg"
      onChange={handleSelect}
      color={useColorModeValue(selectedTag ? 'white' : 'black', 'white')}
      bg={
        selectedTag
          ? `${TagColor[selectedTag as IDashboardTag]}.500`
          : deselectedBgColor
      }
    >
      {Object.values(IDashboardTag).map((tag) => (
        <option key={tag} value={tag}>
          {tag}
        </option>
      ))}
    </Select>
  );
};
