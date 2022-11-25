import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Textarea,
  Input,
} from "@material-tailwind/react";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { FC, ReactElement, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <FormSection>
        <FormSectionRow>
          <Input label="Name" className="text-favorite" />
          <Input label="Surname" />
        </FormSectionRow>
        <Accordion open={open}>
          <AccordionHeader
            onClick={() => setOpen(!open)}
            className="bg-black text-white hover:text-brown-200"
          >
            Some accordion header
          </AccordionHeader>
          <AccordionBody className="bg-pink-200 text-blue-gray-800">
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Box className="p-10 m-2 text-pink-900">Mui box</Box>
      </FormSection>
    </div>
  );
}

const FormSection: FC<{ children: ReactElement[] | ReactElement }> = ({
  children,
}) => (
  <div className="shadow-md p-2 flex flex-col  justify-center align-middle">
    {children}
  </div>
);

const FormSectionRow: FC<{ children: ReactElement[] }> = ({
  children,
}): JSX.Element => (
  <div className="flex gap-2 w-2/3 justify-center">{children}</div>
);

export default App;
