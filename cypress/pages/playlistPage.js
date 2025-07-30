import { Actions } from "../helpers/actions";
import { Assertions } from "../helpers/assertions";

export class PlaylistPage {
  listOfTracks = '#tracklist';
  playlist = '#playlist';
  songName = '.MuiGrid-grid-xs-4';
  songDuration = '.MuiGrid-grid-xs-2';
  searchInput = 'input[type="text"]';
  totalSongsDuration = '#playlist-duration';

  checkTrackListLength(listLength) {
    Assertions.expectElementToHavelength(this.listOfTracks, this.songName, listLength);
  }

  enterSongName(name) {
    Actions.typeText(this.searchInput, name);
  }

  checkSongNameInTrackList(name) {
    Assertions.expectElementToHaveText(this.listOfTracks, this.songName, name);
  }

  addSongToPlaylist(name) {
    Actions.clickButtonByLocatorsByName(this.listOfTracks, this.songName, name);
  }

  checkPlaylistDisplayed() {
    Assertions.expectElementToExist(this.playlist);
  }

  checkPlaylistLength(listLength) {
    Assertions.expectElementToHavelength(this.playlist, this.songName, listLength);
  }

  checkSongNameInPlaylist(name) {
    Assertions.expectElementToHaveText(this.playlist, this.songName, name);
  }

  checkTotalSongsDurationTime() {
    Assertions.expectTotalSongsDuration(this.playlist, this.songDuration, this.totalSongsDuration);
  }
}