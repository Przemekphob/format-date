const formatDate = (timeInSeconds) => {
  let s = `${timeInSeconds}`;
  let m = 0;
  let h = 0;
  
  if (s < 60) {
    return s + 's';
  }
  else if (s < 3600) {
	m = Math.floor(s/60);
	newtime = s - 60*m;
	if (newtime === 0) {
	  return m+'m'; 
	}
	else {
      return m+'m '+newtime+'s';
    }
  }
  else if (s >= 3600) {
    h = Math.floor(s/3600);
    m = Math.floor((s - 3600*h)/60);
    newtime = s - (3600*h+ 60*m);
    if (newtime === 0 && m === 0) {
      return h + 'h';
    }
    else if (newtime === 0) {
      return h + 'h ' + m+ 'm';
    }
    else if (m === 0) {
      return h + 'h ' + newtime+ 's';
    }
    else {
      return h + 'h ' + m+ 'm '+ newtime + 's';
    }
  }
  else {
    return '0s';
  }
}

module.exports = formatDate;