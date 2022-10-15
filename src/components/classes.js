export class Position {
    constructor(role, id) {
      this.role = role;
      this.id = id;
      this.candidates = [new Candidate("")];
    }

    modifyCandidate(idx, name) {
      this.candidates[idx] = new Candidate(name);
    }

    addCandidate() {
        this.candidates.push(new Candidate("")); 
    }

  }

export class Candidate {
  constructor(name) {
    this.name = name;
    this.voteCount = 0;
  }
  
}