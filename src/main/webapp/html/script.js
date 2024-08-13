fillTable()

function fillTable() : void {
    $.get('/rest/players', (players) : void => {
        console.log(players);
        const $playersBody = $('.players-table-body')[0];
        let htmlRows : string = ' ';

        players.forEach(player) : void => {
            htmlRows += `<tr>
                            <td>${player.id}</td>
                         </tr>`
        }
    })

}