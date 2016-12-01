import re

from google_api_facade import get_all_files


def get_all_players_data():
    files_data = get_all_files()
    for file_data in files_data:
        file_data['player_id'] = _parse_player_id_from_file_name(file_data['name'])
    return files_data


def _parse_player_id_from_file_name(file_name):
    return re.search('player_ID_(.*)_20', file_name).group(1)
