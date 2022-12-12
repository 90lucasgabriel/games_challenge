type TileProps = {
  title: string;
  description?: string;
  inline?: boolean;
  onClick?(): void;
  isLoading?: boolean;
};

export default TileProps;
