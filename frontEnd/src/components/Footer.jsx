const Footer = ({ clearCompleted }) => {
  return (
    <div className="text-center mt-4">
      <button onClick={clearCompleted} className="text-orange-500 font-medium">
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
