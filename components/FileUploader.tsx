interface Props {
  ownerId: string;
  accountId: string;
  className?: string;
}

const FileUploader = ({ ownerId, accountId, className }: Props) => {
  console.log(ownerId, accountId, className);
  return <div>FileUploader</div>;
};

export default FileUploader;
