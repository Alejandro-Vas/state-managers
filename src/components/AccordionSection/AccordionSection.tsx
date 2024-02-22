import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import {ExpandMore} from '@mui/icons-material';

type AccordionSectionProps = {
  title: string;
  children: React.ReactNode;
};

const AccordionSection = ({title, children}: AccordionSectionProps) => {
  return (
    <Accordion elevation={4}>
      <AccordionSummary expandIcon={<ExpandMore />} id="panel1-header">
        <Typography variant="h4">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionSection;
