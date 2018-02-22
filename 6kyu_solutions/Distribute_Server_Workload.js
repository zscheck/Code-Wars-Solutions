// Bob has a server farm crunching numbers. He has nodes servers in his farm. His company has a lot of work to do.

// The work comes as a number workload which indicates how many jobs there are.
// Bob wants his servers to get an equal number of jobs each. If that is
// impossible, he wants the first servers to receive more jobs. He also wants
// the jobs sorted, so that the first server receives the first jobs.

// The way this works, Bob wants an array indicating which jobs are going to which servers.

// Can you help him distribute all this work as evenly as possible onto his servers?

// Example
// Bob has 2 servers and 4 jobs. The first server should receive job 0 and 1 while the second should receive 2 and 3.

// distribute(2, 4) # => [[0, 1], [2, 3]]
// On a different occasion Bob has 3 servers and 3 jobs. Each should get just one.

// distribute(3, 3) # => [[0], [1], [2]]
// A couple of days go by and Bob sees a spike in jobs. Now there are 10, but he
// hasn't got more than 4 servers available. He boots all of them. This time the
// first and second should get a job more than the third and fourth.

// distribute(4, 10) # => [[0, 1, 2], [3, 4, 5], [6, 7], [8, 9]]
// Input
// Don't worry about invalid inputs. That is, nodes > 0 and workload > 0 and both will always be integers.




function distribute(nodes, workload){
    var extra = workload%nodes;
    var per = Math.trunc(workload/nodes);
    var firstFor=(per+1)*(extra);
    var nLeft = nodes-extra;
    var secondFor= nLeft*per;
    var indexRes=[];
    var res=[];
    for(let i=0;i<firstFor;i++){
      if(i%(per+1)==0 && i!=0){
      res.push(indexRes);
      indexRes=[];
      indexRes.push(i);
      }else{
      indexRes.push(i);
      }
    }
      if(indexRes.length>0){
      res.push(indexRes);
      indexRes=[];
      }
    for(let i=0;i<secondFor;i++){
      if(i%(per)==0 && i!=0){
      res.push(indexRes);
      indexRes=[];
      indexRes.push(i+firstFor);
      }else{
      indexRes.push(i+firstFor);
      }
    }
    res.push(indexRes);
    if(res.length<nodes){
    var newCount= nodes-res.length;
      for(let i=0;i<newCount;i++){
      res.push([]);
      }
    }
    return res;
}