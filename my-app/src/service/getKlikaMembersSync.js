import {fetchKlikaMembers} from "./fetchMembers"

export const getMembersList = async () => {
      const fetchMembers = async () => {
    // setTeam(teamArray);
    // setSearch("");
        await fetchKlikaMembers()
        .then(res => {
            
            res.json().then(data => {
            console.log(data[""]);

            });
        })
    }

    // fetchMembers()
}