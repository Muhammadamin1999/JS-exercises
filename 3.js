const csv = (data, delimiter =',', omitFirstRow = false)=>
      data
      .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
      .split('\n')
      .map(v => v.split(delimiter));