import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import ArrowIcon from "../../assets/svg/arrow.svg";
import { IMG_ALT, STATUS, WORKING } from "../../constants/Constants";

const CustomDataTable = ({ tableData, headerData }) => {
  const statusTemplate = (rowData) => {
    const statusClass =
      rowData.status === WORKING ? "text-lightBlue" : "text-primaryColor";
    return <span className={`${statusClass} font-bold`}>{rowData.status}</span>;
  };
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h4 style={{ fontWeight: "800" }}>Need Attention 06</h4>
        <img src={ArrowIcon} alt={IMG_ALT.ARROW_ICON} />
      </div>
      <DataTable value={tableData} className="p-datatable-sm">
        {headerData.map((header) => (
          <Column
            key={header.id}
            field={header.key}
            header={header.title}
            body={header.key === STATUS ? statusTemplate : null}
          />
        ))}
      </DataTable>
    </div>
  );
};

export default CustomDataTable;
