import { Typography, Box } from "@mui/material"
import TechList from "./Components/Cards/TechList"
const SkillsAbility = () => {
  return (
    <Box className="SkillAndAbilityBox">
    <Typography sx={{textAlign : "center", marginTop : 4, marginBottom : 2}} variant="h2"><span className="spanHead">Skills</span> & <span className="AbilityCol">Abilities</span></Typography>
   <TechList/>
   </Box>
  )
}

export default SkillsAbility