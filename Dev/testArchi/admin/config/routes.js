exports.routes = function (map) {
	map.get('admin', 'admin#index');
	map.post('admin/connection', 'admin#connection');

    //map.all(':controller/:action');
    //map.all(':controller/:action/:id');
};
