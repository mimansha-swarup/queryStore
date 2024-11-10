import { ILabelValueProps } from "@/types/components";
import React from "react";

const LabelValue: React.FC<ILabelValueProps> = ({
  label,
  children,
  icon = null,
}) => {
  return (
    <div className="flex mb-4 gap-4 items-center">
      {icon}
      <p className="text-sm font-medium text-muted-foreground min-w-40">
        {label}
      </p>
      {children}
    </div>
  );
};

export default LabelValue;
