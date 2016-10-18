#!/usr/bin/mongo

var db = new Mongo().getDB("bugsdb");

db.bugs.remove({});

db.bugs.insert([
  {id: 1, priority: 'P1', status:'Open', owner:'Havit', title:'App crash on open'},
  {id: 2, priority: 'P2', status:'New', owner:'Rovik', title:'Missaligned border on panel'}
]);