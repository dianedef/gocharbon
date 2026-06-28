export interface TagCategory {
  label: string;
  subtags?: {
    [key: string]: TagCategory;
  }
}

export interface TagHierarchy {
  [key: string]: TagCategory;
}

interface TagHierarchy {
  [key: string]: {
    label: string;
    subtags?: {
      [key: string]: {
        label: string;
        subtags?: {
          [key: string]: {
            label: string;
          };
        };
      };
    };
  };
}


export interface SelectedTags {
  selectedMainTags: string[];
  selectedSubtags: string[];
  selectedSubsubtags: string[];
} 

