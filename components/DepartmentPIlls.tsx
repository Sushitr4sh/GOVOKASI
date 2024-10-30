import React from "react";

interface Department {
  department: string;
  src: string;
}

interface DepartmentPillsProps {
  departments: Department[];
  selectedDepartment: Department;
  onSelect: React.Dispatch<React.SetStateAction<Department>>;
}

const DepartmentPIlls = ({
  departments,
  selectedDepartment,
  onSelect,
}: DepartmentPillsProps) => {
  return (
    <div className="flex flex-wrap w-full gap-x-2 gap-y-1">
      {departments.map((dept, index) => (
        <button
          key={index}
          onClick={() => onSelect(dept)}
          className={`px-3 py-1 text-xs rounded-full border border-white text-white font-semibold transition ease-in duration-150 ${
            selectedDepartment === dept ? "bg-white text-[#0a3fa9]" : ""
          }`}
        >
          {dept.department}
        </button>
      ))}
    </div>
  );
};

export default DepartmentPIlls;
