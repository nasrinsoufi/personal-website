import { FC } from "react";
import { ButtonProps } from "@mui/material";
import Button from "core/components/Button";
import CustomHref from "core/components/CustomHref";

const CVButton: FC<ButtonProps> = (props) => {
  const url =
    "https://drive.google.com/file/d/1BSzaklchc9U3wrYOR0JfLBMdQ3ec4-QU/view?usp=drive_link" ;
    

  return (
    <CustomHref to={url}>
      <Button title="Download CV" {...props} color="primary" />
    </CustomHref>
  );
};

export default CVButton;
