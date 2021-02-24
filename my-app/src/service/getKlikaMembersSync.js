import { fetchKlikaMembers } from "./fetchMembers"

const rowNames = [
    "name",
    "company",
    "email",
    "industry",
    "phone",
]

const gsxRowName = (rowName) => `gsx$${rowName}`

const parseMember = (gsxRow) => {
    var member = {}
    rowNames.forEach(rowName => {
        // console.log(gsxRow[gsxRowName(rowName)])
        let rowObject = gsxRow[gsxRowName(rowName)]
        member[rowName] = rowObject["$t"]
    })
    return member
}

export const getMembersList = async () => {

        var members = []
        let response = await fetchKlikaMembers()
            .then(data => {
                // console.log(data);
                let entries = data["feed"]["entry"]
                if (entries != null){
                    entries.flatMap(e => {
                        members.push(parseMember(e))
                    });
                }
                return members
            });

        return response
            
}
