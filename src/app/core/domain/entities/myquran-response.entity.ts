export interface MyQuranResponseEntity<i> {
  status: boolean;
  request: {
    path: string;
  };
  data: i;
}
