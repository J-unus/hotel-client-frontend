import {Classifier} from "./classifier";

export const getClassifierLabel = (value: string, classifiers: Classifier[]): string => {
  return classifiers.find(classifier => classifier.value === value).label;
};
