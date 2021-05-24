//Modelo de Input (TextField) e Botão retirados de Material=UI e adaptados para _ref
//Bibliotecas já referenciadas no modelo
import React from 'react';
import {withStyles, makeStyles,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

//Custumização de comportamento de Input para ficar de acordo com _ref
const Input = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
    }, //gray to black quando focused no título
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    }, //gray to black quando focused no underlined
    '& .Mui.error': {
      borderBottomColor: 'red',
    }, //gray to black quando erro
  },

})(TextField);

//Custumização de botões para ficar de acordo com _ref
const ColorButton1 = withStyles({
  root: {
    color:'gray',    
    borderRadius: '40px',
    backgroundColor: 'white',
      '&:hover': { //Botão Cancelar: muda cor do fundo quando focused de branco para cinza, cor de fonte permanece
      color: 'gray',
      backgroundColor: 'lightgray'
      },
  },
})(Button); 

const ColorButton2 = withStyles ({
  root: {    
    color:'white',
    borderRadius: '40px',
    backgroundColor: 'black',
      '&:hover': {  //Botão Salvar: muda cor do fundo quando focused de preto para cinza, cor fonte de branco para cinza
      color: 'gray',
      backgroundColor: 'lightgray',
      },
  },
})(Button);

//Customização da área do App
const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
 
});

export default function CustomizedInputs() {
  const classes = useStyles();

  //Input e botões
  return (
    <Container className={classes.root}>
    <form className={classes.root}>
      <Input label="Label"></Input> 
    
      <ColorButton1 variant="contained" color="primary" size ="small" disableElevation >
          Cancelar
      </ColorButton1>
      <ColorButton2 variant="contained" color="primary" size ="small" disableElevation >
          Salvar
      </ColorButton2> 
   </form>
   </Container> 
    
  );
}
