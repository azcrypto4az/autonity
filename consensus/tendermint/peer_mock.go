package tendermint

import (
	"go.uber.org/mock/gomock"
	"reflect"
)

// MockPeer is a mock of Peer interface.
type MockPeer struct {
	ctrl     *gomock.Controller
	recorder *MockPeerMockRecorder
}

// MockPeerMockRecorder is the mock recorder for MockPeer.
type MockPeerMockRecorder struct {
	mock *MockPeer
}

// NewMockPeer creates a new mock instance.
func NewMockPeer(ctrl *gomock.Controller) *MockPeer {
	mock := &MockPeer{ctrl: ctrl}
	mock.recorder = &MockPeerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockPeer) EXPECT() *MockPeerMockRecorder {
	return m.recorder
}

// Send mocks base method.
func (m *MockPeer) Send(msgcode uint64, data interface{}) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Send", msgcode, data)
	ret0, _ := ret[0].(error)
	return ret0
}

// Send indicates an expected call of Send.
func (mr *MockPeerMockRecorder) Send(msgcode, data interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Send", reflect.TypeOf((*MockPeer)(nil).Send), msgcode, data)
}

// Send mocks base method.
func (m *MockPeer) SendRaw(msgcode uint64, data []byte) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "SendRaw", msgcode, data)
	ret0, _ := ret[0].(error)
	return ret0
}

// Send indicates an expected call of Send.
func (mr *MockPeerMockRecorder) SendRaw(msgcode, data interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "SendRaw", reflect.TypeOf((*MockPeer)(nil).SendRaw), msgcode, data)
}
