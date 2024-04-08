export const getRequestStatusColor = (status: number): string => {
    let statusColor = '';
    switch (status) {
        case 1:
            statusColor = 'badge-light';
            break;
        case 2:
            statusColor = 'badge-light-primary';
            break;
        case 4:
            statusColor = 'badge-light-success';
            break;
        case 3:
            statusColor = 'badge-light-danger';
            break;
        case 5:
            statusColor = 'badge-light-warning';
            break;
        case 6:
            statusColor = 'green-400';
            break;
        case 7:
            statusColor = 'red-400';
            break;

        default:
            break;
    }

    return statusColor;
};
export const getRequestColor = (status: number): string => {
    let statusColor = '';
    switch (status) {
        case 1:
            statusColor = '#0EB919';
            break;
        case 2:
            statusColor = '#F53E3A';
            break;
        default:
            break;
    }

    return statusColor;
};