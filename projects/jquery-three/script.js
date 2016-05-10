$(document).ready(function() {
  var oldGuardians = [{
    name: "Star Lord",
    notes: "Team leader"
  }, {
    name: "Drax the Destroyer"
  }, {
    name: "Adam Warlock"
  }, {
    name: "Quasar",
    notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
  }, {
    name: "Rocket",
    notes: "Served as temporary leader during Star-Lord's absence"
  }, {
    name: "Gamora"
  }];

  var newGuardians = [{
    name: "Mantis",
    notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
  }, {
    name: "Groot",
    notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
  }, {
    name: "Jack Flag"
  }, {
    name: "Quasar",
    notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
  }, {
    name: "Cosmo the Spacedog",
    notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
  }, {
    name: "Major Victory",
    notes: "Also member of the alternate reality Guardians of the Galaxy team."
  }, {
    name: "Bug"
  }, {
    name: "Moondragon",
    notes: "Resurrected by Drax and Phyla-Vell."
  }];

  // ALL YOUR CODE BELOW HERE //
  //merge:

  var allGs = oldGuardians.concat(newGuardians);

  var names = _.pluck(allGs, 'name');
  // var names = _.map(allGs, function(guardian) {
  //   return guardian.name;
  // });
  //map:  
  var firstNames = _.map((guardian) => guardian.name.split(" ")[0]);
  // var firstNames = _.map(allGs, function(guardian){
  //     return guardian.name.split(" ")[0];
  // });

  //filter:  
  var groot = _.filter((guardian) => guardian.name.toLowerCase() === 'groot');
  // var groot = _.filter(allGs, function(guardian){
  //     return guardian.name.toLowerCase() === 'groot';
  // });



  allGs.sort(function(a, b) {
    var nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) { //sort string ascending
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0; //default return value (no sorting)
  });

  oldGuardians.sort(function(a, b) {
    var nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) { //sort string ascending
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0; //default return value (no sorting)
  });

  newGuardians.sort(function(a, b) {
    var nameA = a.name.toLowerCase(),
      nameB = b.name.toLowerCase();
    if (nameA < nameB) { //sort string ascending
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0; //default return value (no sorting)
  });


  var createTable = function(guardians) {
    var createRow = function(guardian) {
      var $row = $("<tr>");
      var $name = $("<td>").text(guardian.name);
      var $notes = $("<td>").text(guardian.notes || "No Data Available");
      $row.append($name);
      $row.append($notes);
      return $row;
    };
    var $table = $("<table>");
    var $rows = guardians.map(createRow);
    $table.append($rows);
    return $table;
  };
  
var myTable1 = createTable(oldGuardians);
var myTable2 = createTable(newGuardians);

  //$('body').append(createTable(allGs));
  $('body').append(myTable1);
  $('body').append(myTable2);
  
  
  $('<button>', {
    text: 'Combine the tables',
    id: 'btnCombineTables',
    click: function() {
      $('body').empty();
      createTable(allGs).appendTo('body');
    }
  }).appendTo('body');

  // $('<button>', {
  //   text: 'Combine the tables',
  //   id: 'btnCombineTables',
  //   click: function() {
  //     function mergeTables(parent, remove) {
  //       //if no parent is passed, default to body 
  //       if (!parent) {
  //         parent = 'body';
  //       }
  //       //place to store the full HTML string of all the combined tables
  //       var table_html = '<table><tr>';
  //       //go through all tables
  //       $(parent).find('table').each(function() {
  //         //add their HTML to our big HTML string
  //         table_html += '<td><table>' + $(this).html() + '</table></td>';
  //         //remove that table from the page
  //         if (remove) {
  //           $(this).remove();
  //         }
  //       });
  //       //close off and return the big HTML string
  //       return table_html + '</tr></table>';
  //     }

  //     //call example
  //     $('body').html(mergeTables('body'));

  //   }
  // }).appendTo('body');




  //   // ALL YOUR CODE ABOVE HERE //
});