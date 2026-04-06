export type LearningPath = {
  id: string;
  title: string;
  description: string;
  certificateCode: string;
  releaseDate: string;
};

export type AdminMetrics = {
  activeLearners: number;
  certificationsIssued: number;
  completionRate: number;
};
