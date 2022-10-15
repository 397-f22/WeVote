export class Position {
    constructor(role) {
      this.role = role;
      this.candidates = [new Candidate("")];
    }

    modifyCandidate(idx, name) {
      this.candidates[idx] = new Candidate(name);
    }

    addCandidates() {
        this.candidates.append(new Candidate("")); 
    }

  }

export class Candidate {
  constructor(name) {
    this.name = name;
    this.voteCount = 0;
  }
  
}