import {Classifier} from "./classifier";

export const getClassifierLabel = (value: string, classifiers: Classifier[]): string => {
  if (!value || !classifiers) {
    return '';
  }
  const classifier = classifiers.find(classifier => classifier.value === value);
  if (classifier) {
    return classifier.label;
  }
  return '';
};
