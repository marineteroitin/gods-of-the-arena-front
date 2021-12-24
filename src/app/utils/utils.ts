export function getIconGladiatorType(name : string){
  if(name === 'Animal'){
    return './assets/img/animal.png';
  }
  if(name === 'Archer'){
    return './assets/img/archer.png';
  }
  if(name === 'Cavalier'){
    return './assets/img/cavalier.png';
  }
  if(name === 'Lancier'){
    return './assets/img/lancier.png';
  }
  if(name === 'Épéiste'){
    return './assets/img/epeiste.png';
  }

  //default
  return './assets/img/epeiste.png'

}
