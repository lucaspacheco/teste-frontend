//Modelo de Dropdown tirado de Material-UI: Select e adaptado de acordo com _ref
//./Label foi utilizado como referência para alterar parâmetroe de cores nas caixas de selação
//Bibliotecas já importadas com a referência, exceto a "container"
import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';

//Customização da área do App
const useStyles = makeStyles({
    root: {      
      display: 'flex',
      flexWrap: 'wrap',
      color: 'black',
      padding: '10px',      
    },
    formControl: {
        margin: '10px',
        minWidth: 200,        
        '& label.Mui-focused': {//customização de label quando focado
            color: 'black',
          },        
        '& .MuiInput-underline:after': { //Customização para select com bordas, focado e após
            borderBottomColor: 'black',
          },
        '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'black',
            },            
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
          },
    },    
  });

  //Está da mesma forma que a referência de MaterialUI
  export default function SimpleSelect() {
    const classes = useStyles();
    const [Label, setAge] = React.useState('');
      const handleChange = (event) => {
      setAge(event.target.value);
    };
    //Primeiro container com caixa de seleção sem bordas e o segundo com bordas
    return (
      <div>
          <Container className={classes.root}>
              <FormControl className={classes.formControl}>
                  <InputLabel id="Input">Label</InputLabel>
                      <Select
                          labelId="Input"
                          id="Input"
                          value={Label}
                          onChange={handleChange}>
          
                          <MenuItem value={10}>Option 1</MenuItem>
                          <MenuItem value={20}>Option 2</MenuItem>
                          <MenuItem value={30}>Option 3</MenuItem>
                      </Select>
              </FormControl>
          </Container>
        
          <Container className={classes.root}>    
             <FormControl variant="outlined" className={classes.formControl}>
                 <InputLabel id="borda">Assunto</InputLabel>
                      <Select
                          labelId="borda"
                          id="borda"
                          value={Label}
                          onChange={handleChange}
                          label="Assunto">
                                       
                          <MenuItem value={10}>Option 1</MenuItem>
                          <MenuItem value={20}>Option 2</MenuItem>
                          <MenuItem value={30}>Option 3</MenuItem>
                      </Select>
              </FormControl>
          </Container>
       
      </div>
    );
  }
  