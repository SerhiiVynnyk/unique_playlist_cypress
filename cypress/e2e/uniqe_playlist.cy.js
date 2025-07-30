import { PlaylistPage } from "../pages/playlistPage";

const playlistPage = new PlaylistPage;

describe('Unique Playlist page tests', () => {
  
  beforeEach(() => {
    cy.visit('/');
  });

  it('Search Functionality', () => {
    playlistPage.checkTrackListLength(5);
    playlistPage.enterSongName('Summer Breeze');
    playlistPage.checkTrackListLength(1);
    playlistPage.checkSongNameInTrackList('Summer Breeze');
  });

  it('Add Track Using "+" Button', () => {
    playlistPage.addSongToPlaylist('Summer Breeze');
    playlistPage.checkPlaylistDisplayed();
    playlistPage.checkPlaylistLength(1);
    playlistPage.checkSongNameInPlaylist('Summer Breeze');
  });

  it('Verify Total Duration of the Playlist in Seconds', () => {
    playlistPage.addSongToPlaylist('Summer Breeze');
    playlistPage.addSongToPlaylist('Autumn Leaves');
    playlistPage.checkPlaylistDisplayed();
    playlistPage.checkPlaylistLength(2);
    playlistPage.checkSongNameInPlaylist('Summer Breeze');
    playlistPage.checkSongNameInPlaylist('Autumn Leaves');
    playlistPage.checkTotalSongsDurationTime();
  });
});