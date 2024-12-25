import {Box} from "@mui/material";
const SkilBox = ({tool}) => {
  return (
    <Box sx={{display: "flex", flexWrap: "wrap", gap: 1, marginLeft: 2}}>
      {tool.map((t) => (
        <div className="skill" key={t}>
          {t}
        </div>
      ))}
    </Box>
  );
};

export default SkilBox;
