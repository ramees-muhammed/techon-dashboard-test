
import "./Ui.scss";

interface TableProps {
  headers?: string[]; //  headers dynamic
  data?: any[];
}

const DocumentsTable = ({ headers = [], data = [] }: TableProps) => {
  const isEmpty = data.length === 0;

  return (
    <div className="custom-table-container">
      <table className="custom-table">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        
        {!isEmpty && (
          <tbody>
            {data.map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td>Dummy Data</td>
                <td>...</td>
          
              </tr>
            ))}
          </tbody>
        )}
      </table>

      {/* Empty State */}
      {isEmpty && (
        <div className="table-empty-state">
          <img 
            src="/icons/empty_box.png" 
            alt="No documents found" 
            className="empty-image"
          />
        </div>
      )}
    </div>
  );
};

export default DocumentsTable;