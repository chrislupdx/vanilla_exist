export default function passSiteFriendlyObjectToDom(exitJsonmaybe) {
    const html = /*html*/`
<main>
    <table id="table">
        <thead>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>first initial</th>
                <th>last initial</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${exitJsonmaybe.id}</td>
                <td>${exitJsonmaybe.username}</td>
                <td>${exitJsonmaybe.first_name}</td>
                <td>${exitJsonmaybe.last_name}</td>
            </tr>
        </tbody>
    </table>

    </main>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}